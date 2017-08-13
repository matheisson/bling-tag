from cryptography.fernet import Fernet

class AuthService:

    proof = Fernet.generate_key().decode("utf-8")
    secret_key = Fernet.generate_key()
    encrypter = Fernet(secret_key)

    @classmethod
    def create_token(cls, username):
        to_encrypt = username + cls.proof
        encrypted = cls.encrypter.encrypt(to_encrypt.encode("utf-8"))
        return encrypted.decode("utf-8")

    @classmethod
    def authenticate_token(cls, token):
        decrypted = cls.encrypter.decrypt(token.encode("utf-8")).decode("utf-8")
        if cls.proof not in decrypted:
            return None
        return decrypted.split(cls.proof)[0]
