({
    onNewMessage: function(cmp, evt, helper) {
        var content = evt.getParam('content');
        var timestamp = evt.getParam('timestamp');
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