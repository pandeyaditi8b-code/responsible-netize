// =========================================
// OPEN SAFETY TIPS
// =========================================

function openSafety(language) {

    let title = "";
    let content = "";

    if (language === "english") {

        title = "English Safety Tips";

        content = `
        <h1>🛡️ English Safety Tips</h1>

        <h2>Stay Safe Online</h2>

        <ul>
            <li>Use strong and unique passwords.</li>
            <li>Never share your password or OTP.</li>
            <li>Keep your personal information private.</li>
            <li>Do not click suspicious links.</li>
            <li>Check the website address before entering information.</li>
            <li>Keep your device and apps updated.</li>
            <li>Use privacy settings on social media.</li>
            <li>Verify information before sharing it.</li>
            <li>Do not download files from unknown sources.</li>
            <li>Report suspicious online activity.</li>
        </ul>

        <h2>Remember</h2>

        <p>
        THINK • VERIFY • PROTECT • RESPECT • REPORT
        </p>

        <p>
        Be a Responsible Netizen! 🌐
        </p>
        `;

    }

    else if (language === "hindi") {

        title = "Hindi Safety Tips";

        content = `
        <h1>🛡️ ऑनलाइन सुरक्षा सुझाव</h1>

        <h2>ऑनलाइन सुरक्षित रहें</h2>

        <ul>
            <li>मजबूत और अलग-अलग पासवर्ड का उपयोग करें।</li>
            <li>अपना पासवर्ड या OTP किसी के साथ साझा न करें।</li>
            <li>अपनी व्यक्तिगत जानकारी सुरक्षित रखें।</li>
            <li>संदिग्ध लिंक पर क्लिक न करें।</li>
            <li>जानकारी दर्ज करने से पहले वेबसाइट जांचें।</li>
            <li>अपने डिवाइस और ऐप्स को अपडेट रखें।</li>
            <li>सोशल मीडिया की प्राइवेसी सेटिंग्स का उपयोग करें।</li>
            <li>जानकारी शेयर करने से पहले उसे सत्यापित करें।</li>
            <li>अनजान स्रोतों से फाइल डाउनलोड न करें।</li>
            <li>संदिग्ध ऑनलाइन गतिविधि की रिपोर्ट करें।</li>
        </ul>

        <h2>याद रखें</h2>

        <p>
        सोचें • सत्यापित करें • सुरक्षित रखें • सम्मान करें • रिपोर्ट करें
        </p>

        <p>
        एक जिम्मेदार नेटिजन बनें! 🌐
        </p>
        `;

    }

    else if (language === "marathi") {

        title = "Marathi Safety Tips";

        content = `
        <h1>🛡️ ऑनलाइन सुरक्षिततेचे नियम</h1>

        <h2>ऑनलाइन सुरक्षित रहा</h2>

        <ul>
            <li>मजबूत आणि वेगवेगळे पासवर्ड वापरा.</li>
            <li>तुमचा पासवर्ड किंवा OTP कोणासोबतही शेअर करू नका.</li>
            <li>तुमची वैयक्तिक माहिती सुरक्षित ठेवा.</li>
            <li>संशयास्पद लिंकवर क्लिक करू नका.</li>
            <li>माहिती देण्यापूर्वी वेबसाइटचा पत्ता तपासा.</li>
            <li>तुमचे डिव्हाइस आणि अॅप्स अपडेट ठेवा.</li>
            <li>सोशल मीडियावरील प्रायव्हसी सेटिंग्ज वापरा.</li>
            <li>माहिती शेअर करण्यापूर्वी ती तपासा.</li>
            <li>अनोळखी स्रोतांकडून फाइल डाउनलोड करू नका.</li>
            <li>संशयास्पद ऑनलाइन गतिविधीची तक्रार करा.</li>
        </ul>

        <h2>लक्षात ठेवा</h2>

        <p>
        विचार करा • तपासा • सुरक्षित ठेवा • आदर करा • तक्रार करा
        </p>

        <p>
        एक जबाबदार नेटिझन बना! 🌐
        </p>
        `;

    }


    // OPEN NEW TAB

    const newWindow = window.open("", "_blank");

    newWindow.document.write(`

        <!DOCTYPE html>

        <html>

        <head>

            <title>${title}</title>

            <style>

                body {
                    font-family: Arial, sans-serif;

                    background:
                    linear-gradient(
                        135deg,
                        #07152f,
                        #0b2347
                    );

                    color: white;

                    padding: 50px;

                    line-height: 1.8;
                }

                .content {

                    max-width: 800px;

                    margin: auto;

                    background:
                    rgba(255,255,255,0.08);

                    padding: 40px;

                    border-radius: 20px;

                    border:
                    1px solid rgba(0,183,255,0.3);

                    box-shadow:
                    0 15px 40px rgba(0,0,0,0.3);
                }

                h1 {
                    color: #00b7ff;
                }

                h2 {
                    color: #00b7ff;
                }

                li {
                    margin: 12px 0;
                }

                p {
                    color: #d9eaff;
                    font-size: 18px;
                }

            </style>

        </head>

        <body>

            <div class="content">

                ${content}

            </div>

        </body>

        </html>

    `);

    newWindow.document.close();
}