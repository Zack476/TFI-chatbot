$(document).ready(()=>{
    $(".chat-btn").click(()=>{
        $(".chat-box").slideToggle("slow")
    })
})
$(document).ready(function() {
    $(".bot-chat-btn").click(function() {
        // Logic for bot chat
        $(".chats").append("<div class='client-chat'>Bot message: Hello, I'm a bot!</div>");
    });

    $(".live-chat-btn").click(function() {
        // Logic for live chat
        $(".chats").append("<div class='client-chat'>Connecting to a live agent...</div>");
        initiateLiveChat();
    });

    // Other code for managing chat interactions...

    function initiateLiveChat() {
        // Simulate live chat interaction
        setTimeout(function() {
            $(".chats").append("<div class='client-chat'>Live Agent: How can I assist you?</div>");
        }, 1000);
    }
});
