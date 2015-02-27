function DOMtoString(document_root) {
    var html = '',
        node = document_root.firstChild;
    while (node) {
        switch (node.nodeType) {
			case Node.ELEMENT_NODE:
				html += node.outerHTML;
				break;
			default
				break;
        }
        node = node.nextSibling;
    }
    return html;
}

chrome.extension.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});