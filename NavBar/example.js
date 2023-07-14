import { NavBar } from "/obvia/components/NavBar/NavBar.js";
import { Button } from "/obvia/components/Button/Button.js";
import { TextInput } from "/obvia/components/TextInput/TextInput.js";
import { Form } from "/obvia/components/Form/Form.js";
import { DropDown } from "/obvia/components/DropDown/DropDown.js";
import { Link } from "/obvia/components/Link/Link.js";


var myNavBar = new NavBar({
    id: "myHeaderNav",

    components: [{
            ctor: Button,
            props: {
                id: "homeButton",
                css: {
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
                id: "blogButton",
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
                id: "solutionDropdown",
                label: "Solutions",
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
                change: function() {
                    var selectedOption = myNavBar.solutionDropdown.selectedItem.value;
                    var link = document.createElement("a");
                    link.href = getSolutionLink(selectedOption);
                    link.target = "_blank";
                    link.click();
                }
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

myNavBar.render().then(function(cmpInstance) {
    $('#root').append(cmpInstance.$el);
});

export { myNavBar };
