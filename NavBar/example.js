import { HeaderNavBar } from "/obvia/components/NavBar/NavBar.js";
import { Button } from "/obvia/components/Button/Button.js";
import { TextInput } from "/obvia/components/TextInput/TextInput.js";
import { Form } from "/obvia/components/Form/Form.js";
import { DropDown } from "/obvia/components/DropDown/DropDown.js";

var myHeaderNavBar = new HeaderNavBar({
    id: "myHeaderNav",
    websiteName: "My Website",
    components: [{
            ctor: Button,
            props: {
                id: "homeButton",
                label: "Home",
                onClick: function() {
                    console.log("Clicked home button");
                }
            }
        },
        {
            ctor: Button,
            props: {
                id: "page1Button",
                label: "Blog",
                onClick: function() {
                    console.log("Clicked Page 1 button");
                }
            }
        },
        {
            ctor: DropDown,
            props: {
                id: "page2Dropdown",
                label: "Solutions",
                options: [
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                    { value: "option3", label: "Option 3" }
                ],
                onSelect: function(selectedValue) {
                    console.log("Selected value:", selectedValue);
                }
            }
        },
        {
            ctor: Form,
            props: {
                id: "searchForm",
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

myHeaderNavBar.render().then(function(cmpInstance) {
    $('#root').append(cmpInstance.$el);
});

export { myHeaderNavBar };