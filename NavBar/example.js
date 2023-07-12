import { HeaderNavBar } from "/obvia/components/NavBar/NavBar.js";
import { Button } from "/obvia/components/Button/Button.js";
import { TextInput } from "/obvia/components/TextInput/TextInput.js";
import { Form } from "/obvia/components/Form/Form.js";
import { DropDown } from "/obvia/components/DropDown/DropDown.js";
import { Link } from "/obvia/components/Link/Link.js";

let onClick = function() {
    console.log("Item click", arguments);
}

var myHeaderNavBar = new HeaderNavBar({
    id: "myHeaderNav",
    websiteName: "My Website",
    components: [{
            ctor: Button,
            props: {
                id: "homeButton",
                css: {
                    display: "inline",
                    width: "25%",
                },
                components: [{
                    ctor: Link,
                    props: {
                        id: "menuItem1",
                        href: "https://www.kreatx.com/",
                        target: "_blank",
                        label: "Home",
                    }
                }],
            }
        },
        {
            ctor: Button,
            props: {
                id: "page1Button",
                css: { width: "25%" },
                components: [{
                    ctor: Link,
                    props: {
                        id: "menuItem2",
                        href: "https://www.kreatx.com/blog/",
                        target: "_blank",
                        label: "Blog",
                    }
                }],
            }
        },
        {
            ctor: DropDown,
            props: {
                id: "page2Dropdown",
                label: "Solutions",
                rendering: {
                    direction: 'vertical'
                },
                css: {
                    width: "25%"
                },
                dataProvider: [
                    { value: "automotive", text: "Automotive" },
                    { value: "communications", text: "Communication" },
                    { value: "financial", text: "Financial" }
                ],
                labelField: "text",
                valueField: "value",
                onSelect: function(selectedValue) {
                    console.log("Selected value:", selectedValue);
                },
                components: [{
                    ctor: Link,
                    props: {
                        id: "menuItem",
                        label: "Go to Solutions",
                        href: "#",
                        onClick: function() {
                            var selectedOption = myHeaderNavBar.components.page2Dropdown.value;
                            var link = document.createElement("a");
                            link.href = getSolutionLink(selectedOption);
                            link.target = "_blank";
                            link.click();
                        }
                    }
                }]
            }
        },
        {
            ctor: Form,
            props: {
                id: "searchForm",
                css: { width: "25%" },
                components: [{
                        ctor: TextInput,
                        props: {
                            id: "searchInput",
                            placeholder: "Search"
                        }
                    },
                    {
                        ctor: Button,
                        props: {
                            id: "submitButton",
                            label: "Submit",
                            onClick: function() {
                                console.log("Clicked submit button");
                                // Handle form submission logic here
                            }
                        }
                    }
                ]
            }
        }
    ]
});

function getSolutionLink(selectedOption) {
    switch (selectedOption) {
        case "automotive":
            return "https://www.kreatx.com/solutions/automotive/";
        case "communications":
            return "https://www.kreatx.com/solutions/communications/";
        case "financial":
            return "https://www.kreatx.com/solutions/financial/";
        default:
            return "#";
    }
}

myHeaderNavBar.render().then(function(cmpInstance) {
    $('#root').append(cmpInstance.$el);
});

export { myHeaderNavBar };
