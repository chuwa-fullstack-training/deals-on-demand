package com.example.dod.util;

import org.jasypt.encryption.pbe.StandardPBEStringEncryptor;

public class EncryptionUtils {

    private static final String ENCRYPTION_KEY = "ENCKEY"; // Replace with your encryption key

    public static String encrypt() {
        StandardPBEStringEncryptor encryptor = new StandardPBEStringEncryptor();
        encryptor.setPassword(ENCRYPTION_KEY);
        return encryptor.encrypt("pscale_pw_Xnu1PnF5XjGUjKmgLHYSgUjrMtyZZgVJ7q9gLPRaCBJ");
    }
//
    public static String decrypt(String encryptedText) {
        StandardPBEStringEncryptor encryptor = new StandardPBEStringEncryptor();
        encryptor.setPassword(ENCRYPTION_KEY);
        return encryptor.decrypt(encrypt());
    }
}
