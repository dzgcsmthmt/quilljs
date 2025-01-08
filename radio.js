const BlockEmbed = Quill.import("blots/embed");
class RadioBlot extends BlockEmbed {
    static blotName = "radio";
    static tagName = "input";
    // static scope = "INLINE_BLOT";

    static create(value) {
        let node = super.create();
        node.setAttribute("type", "radio");
        node.setAttribute("name", value.name || "default");
        node.setAttribute("value", value.value || "1");
        node.classList.add("quill-radio-button");
        return node;
    }

    static value(node) {
        return {
            name: node.getAttribute("name"),
            value: node.getAttribute("value"),
        };
    }
}

Quill.register(RadioBlot);
