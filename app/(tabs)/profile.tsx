import ProfileModal from '@/components/ProfileModal';
import SafeScreen from '@/components/safescreen';
import { useRouter } from 'expo-router';
import React, { useContext, useEffect, useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import ProgressBar from "../../components/home/ProgressBar";
import Button from "../../components/shared/Button";
import UserCard from "../../components/UserCard";
import { userDetailsContext } from "../../context/context";
import { clearAllData, logAllAsyncStorage } from "../../services/userStorage";
import { Entypo } from '@expo/vector-icons';

const ProfileScreen = () => {
    const { userData } = useContext(userDetailsContext);
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();
    const show = false;

    useEffect(() => {
        const username = userData?.profile?.name ?? "";
        if (username === "user" || username === "") {
            setShowModal(true);
        }
    }, [userData]);

    if (!userData) {
        return (
            <SafeScreen>
                <Text style={styles.text}>Loading...</Text>
            </SafeScreen>
        );
    }

    return (
        <SafeScreen>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Profile</Text>
                    <Entypo name="dots-three-vertical" size={20} color="gray" />

                </View>

                <View style={styles.section}>
                    <UserCard userData={userData} setShowModal={setShowModal} />
                </View>
{/* 
                <View style={styles.progressContainer}>
                    <ProgressBar />
                </View> */}

                {/* <View style={styles.section}>
          <QuickStats userData={userData} />
        </View> */}

                {show && (
                    <View style={styles.section}>
                        <Button text="Clear all data" type onPress={clearAllData} />
                        <View style={styles.buttonSpacing} />
                        <Button text="Log all data" type onPress={logAllAsyncStorage} />
                        <View style={styles.buttonSpacing} />
                        <Button text="Upload all data" type onPress={clearAllData} />
                    </View>
                )}

                {/* <View style={styles.section}>
                    <Button text="Quiz History" type onPress={() => router.push("/")} />
                </View>

                <View style={[styles.section, { marginBottom: 20 }]}>
                    <Button text="Favorite FlashCards" type onPress={() => router.push("/")} />
                </View> */}

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showModal}
                    onRequestClose={() => setShowModal(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContainer}>
                            <ProfileModal setShowModal={setShowModal} />
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </SafeScreen>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 16,
    },
    headerText: {
        fontSize: 24,
        fontFamily: 'quicksand-bold',
        color: '#000',
    },
    section: {
        paddingHorizontal: 16,
    },
    progressContainer: {
        paddingHorizontal: 16,
        backgroundColor: '#ffffff',
        marginHorizontal: 16,
        borderRadius: 12,
        marginTop: 16,
        paddingBottom: 16,
    },
    buttonSpacing: {
        height: 12,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContainer: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
    },
});
