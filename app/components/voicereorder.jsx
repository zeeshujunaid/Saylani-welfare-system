import React, { useState, useEffect, useRef } from "react";
import { View, Button, Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";

export default function AudioScreen() {
  const [recording, setRecording] = useState(null);
  const [sound, setSound] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);

  const intervalRef = useRef(null);

  useEffect(() => {
    (async () => {
      console.log("Requesting microphone permissions...");
      const { granted } = await Audio.requestPermissionsAsync();
      console.log("Permissions granted?", granted);
      if (!granted) {
        Alert.alert("Permission required", "Please allow microphone access");
      }

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
        playsInSilentModeAndroid: true,
        staysActiveInBackground: true,
      });
      console.log("Audio mode set successfully");
    })();

    return () => {
      clearInterval(intervalRef.current);
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const startRecording = async () => {
    try {
      console.log("Starting recording...");
      setIsRecording(true);
      setRecordingDuration(0);

      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);

      // Start timer for recording duration
      intervalRef.current = setInterval(async () => {
        if (recording) {
          const status = await recording.getStatusAsync();
          setRecordingDuration(Math.floor(status.durationMillis / 1000));
        }
      }, 500);

      console.log("Recording started:", recording);
    } catch (err) {
      console.log("Failed to start recording", err);
      Alert.alert("Error", "Failed to start recording. Check console.");
    }
  };

  const stopRecording = async () => {
    setIsRecording(false);
    clearInterval(intervalRef.current);

    try {
      console.log("Stopping recording...");
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      console.log("Recording saved at:", uri);
      Alert.alert("Recording saved!", uri);

      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri },
        { shouldPlay: false }
      );
      setSound(newSound);
      console.log("Sound loaded for playback:", newSound);
    } catch (err) {
      console.log("Failed to stop recording", err);
      Alert.alert("Error", "Failed to stop recording. Check console.");
    }
  };

  const playSound = async () => {
    if (!sound) {
      Alert.alert("No recording available", "Record something first");
      return;
    }
    try {
      await sound.stopAsync();
      await sound.setPositionAsync(0);
      await sound.playAsync();
      console.log("Playing sound...");
    } catch (err) {
      console.log("Failed to play sound", err);
      Alert.alert("Error", "Failed to play sound. Check console.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.recordBox}>
        {isRecording && (
          <Text style={styles.duration}>Recording: {recordingDuration}s</Text>
        )}

        <TouchableOpacity
          style={[styles.button, isRecording ? styles.stopButton : styles.startButton]}
          onPress={isRecording ? stopRecording : startRecording}
        >
          <Text style={styles.buttonText}>
            {isRecording ? "Stop Recording" : "Start Recording"}
          </Text>
        </TouchableOpacity>

        {/* Play button */}
        {!isRecording && sound && (
          <TouchableOpacity style={styles.button} onPress={playSound}>
            <Text style={styles.buttonText}>Play Recording</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  recordBox: {
    width: 300,
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  duration: {
    fontSize: 16,
    marginBottom: 15,
    color: "red",
  },
  button: {
    marginVertical: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#007AFF",
    width: "100%",
    alignItems: "center",
  },
  startButton: {
    backgroundColor: "#28a745",
  },
  stopButton: {
    backgroundColor: "#dc3545",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
