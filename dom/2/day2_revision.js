// nodeValue
// textContent
const nodeValue_div = document.querySelector(".nodeValue_1");
const textContent_div = document.querySelector(".textcontent_1");
nodeValue_div.textContent = "sample";
textContent_div.textContent = "update";
console.log("nodeValue is" + nodeValue_div.nodeValue);
console.log(nodeValue_div.textContent);
console.log(textContent_div.textContent);

// getAttribute()
// setAttribute()
const getAttribute_div = document.querySelector(".getAttribute_1");
const setAttribute_div = document.querySelector(".setAttribute_1");

console.log(
  "Checking attribute for a div " + getAttribute_div.getAttribute("class")
);
setAttribute_div.setAttribute("class", "text");
// className
// classList
const className_first_div = document.querySelector("#className_first");
const classList_first_div = document.querySelector("#classList_first");

className_first_div.className = "color";
classList_first_div.className = "text";
console.log(classList_first_div.className);

classList_first_div.classList.add("color", "text-italic", "font-gothic");
// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)
const createElement_div = document.createElement("div");
const createTextNode_div = document.createTextNode("createElement_div content");
createElement_div.appendChild(createTextNode_div);
createElement_div.classList.add(
  "color",
  "text-italic",
  "font-gothic",
  "text-bold"
);
document.querySelector(".createElement_1").appendChild(createElement_div);

// insertBefore(element,element to insertBefore)
const elementToInsertBefore = document.querySelector(".elementToInsertBefore");
const createElement_insertBefore = document.createElement("div");
const createElement_insertBefore_text = document.createTextNode(
  "createElement_insertBefore"
);
createElement_insertBefore.appendChild(createElement_insertBefore_text);

createElement_insertBefore.classList.add(
  "color",
  "text-italic",
  "font-gothic",
  "text-bold"
);

document
  .querySelector(".insertBefore")
  .insertBefore(createElement_insertBefore, elementToInsertBefore);

// replaceChild(new,old)
const toReplaceChild = document.querySelector(".toReplaceChild");
const divToReplace = document.querySelector(".divToReplace");
const toReplaceChildWithElement = document.createElement("div");
// textContent
toReplaceChildWithElement.textContent = "replace child content";
toReplaceChild.replaceChild(toReplaceChildWithElement, divToReplace);

// remove(): elementToRemove.remove()
const toRemove = document.querySelector(".toRemove");
toRemove.remove();
// removeChild(element)
const toRemoveChild = document.querySelector(".toRemoveChild");
toRemoveChild.removeChild(toRemoveChild.firstChild.nextSibling);

// innerHTML
const innerHTML_li = document.querySelector(".innerHTML");
innerHTML_li.innerHTML = `<li class="innerHTML">innerHTML</li> 
                        <li>alpha</li>
                        <li>beta</li>
                        <li>sigma</li>`;

// innerHTML_li.prepend()
