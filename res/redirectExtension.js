// By ChatGPT
// Define and register the extension
class RedirectExtension {
    constructor() {}

    getInfo() {
        return {
            id: "redirectExtension",
            name: "URL Redirect",
            blocks: [
                {
                    opcode: "redirectToURL",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "Go to [URL]",
                    arguments: {
                        URL: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "https://example.com"
                        }
                    }
                }
            ]
        };
    }

    redirectToURL(args) {
        const url = args.URL;
        window.location.href = url;
    }
}

// Register the extension
Scratch.extensions.register(new RedirectExtension());
