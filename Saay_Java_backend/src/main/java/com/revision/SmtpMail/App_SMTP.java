package com.revision.SmtpMail;

import com.fasterxml.jackson.annotation.JacksonAnnotationsInside;
import com.revision.Entities.Auth.App_User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Component;

@Component
public class App_SMTP {

    @Autowired
    MailSender mailSender;

    SimpleMailMessage simpleMailMessage;


    public void sendResetPasswordMail(App_User user, String token){
        simpleMailMessage=new SimpleMailMessage();
        simpleMailMessage.setFrom("khrabakoko@gmail.com");

        simpleMailMessage.setSubject("عملية اعادة ادخال كلمة السر لحسابك في موقعنا سعي");
        simpleMailMessage.setTo(user.getEmail());
        simpleMailMessage.setText("عملية اعادة ادخال كلمة السر لحسابك في موقعنا سعي");
        simpleMailMessage.setText("مرحبًا"+user.getName()+"،\n" +
                "\n" +
                "لقد تلقينا طلبًا لإعادة تعيين كلمة المرور لحسابك في موقعنا سعي. إذا كنت قد طلبت ذلك، يرجى الضغط على الرابط أدناه لإعادة تعيين كلمة المرور الخاصة بك:\n" +
                "\n" +
                "http://localhost:8080/unauth/setNewPassword?token=\n"+token +
                "\n" +
                "هذا الرابط صالح لمدة 60 دقيقة فقط. إذا لم تقم بطلب إعادة تعيين كلمة المرور، يرجى تجاهل هذه الرسالة، ولن يتم إجراء أي تغييرات على حسابك.\n" +
                "\n" +
                "مع تحياتنا،\n" +
                "فريق الدعم في موقع سعي");

        mailSender.send(simpleMailMessage);
    }
}
