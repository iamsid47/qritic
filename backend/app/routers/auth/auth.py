from fastapi import APIRouter
import smtplib
from email.mime.text import MIMEText

router = APIRouter()

@router.get("/check")
def status_check():
    return {"status": "smtp working"}

@router.get("/email_verify")
def email_verification(userId, fName, userEmail):
    verify_link = f"https://stuff.com/?u={userId}"
    subject = "Verify your account - Qritic"
    body = f"Dear {fName}, please click this link to verify your Qritic account: {verify_link}"

    sender = "siddheshkulthe43@gmail.com"
    recipient = userEmail

    password = ""

    msg = MIMEText(body)
    msg['Subject'] =subject
    msg['From']=sender
    msg['To']=recipient
    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp_server:
        smtp_server.login(sender, password)
        smtp_server.sendmail(sender, recipient, msg.as_string())

    print(f"Verification Email Sent To: {userEmail}")
    return {"status": "success", "message": f"Verification Email Sent To: {userEmail}"} 