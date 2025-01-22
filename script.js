const BOT_TOKEN = '7886496673:AAFquyIx1vaVu-XheYYT-ziKZZ_5wHr63Uo';
const CHAT_ID = '-4717512555';


document.querySelector('.btn_send').addEventListener('click', async () => {

    const name = document.querySelector('input[placeholder="NAME"]').value;
    const email = document.querySelector('input[placeholder="EMAIL"]').value;
    const message = document.querySelector('.message').value;

    if (!name || !email || !message) {
        alert('Completeaza toate spatiile!');
        return;
    }




    


    const text = `
        🔔 Mesaj nou!:
        👤 Nume: ${name}
        📧 Email: ${email}
        ✉️ Mesaj: ${message}
    `;
    try {
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: text,
            }),
        });

        if (response.ok) {
            alert('Mesajul a fost trimis cu succes!');
        } else {
            alert('Eroare la trimiterea mesajului.');
        }
    } catch (error) {
        console.error('Eroare:', error);
        alert('A apărut o eroare la trimitere.');
    }
});