({
    onNewMessage: function(cmp, evt, helper) {
        const content = evt.getParam('content');
        const timestamp = evt.getParam('timestamp');
        const title = 'Nova mensagem';

        if ("Notification" in window) {
            if (Notification.permission === 'granted') {
                const notification = new Notification(title, {
                    tag: timestamp,
                    body: content
                });

                notification.onclick = (e) => {
                    e.preventDefault();
                    window.focus();
                    notification.close();
                }
            } else {
                Notification.requestPermission();
            }
        }
    }
})