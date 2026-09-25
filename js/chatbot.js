(function () {
    if (!window.chatbase || window.chatbase("getState") !== "initialized") {
        window.chatbase = (...args) => {
            if (!window.chatbase.q) {
                window.chatbase.q = [];
            }
            window.chatbase.q.push(args);
        };

        window.chatbase = new Proxy(window.chatbase, {
            get(target, prop) {
                if (prop === "q") return target.q;
                return (...args) => target(prop, ...args);
            }
        });
    }

    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "hIOf2tFVbfiV8sf3uTkmO"; // Chatbot ID của bạn
    script.domain = "www.chatbase.co";

    document.body.appendChild(script);
})();