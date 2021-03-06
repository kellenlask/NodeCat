function DOMtoString(document_root) {
    var html = '';
    node = document_root.firstChild;
    
    while (node) {
	if(node.nodeType == Node.ELEMENT_NODE) {
		html += node.outerHTML;
	}
	
	document.write(html);
        node = node.nextSibling;
    }
    return html;
}

chrome.extension.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});