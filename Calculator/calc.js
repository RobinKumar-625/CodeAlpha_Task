let inputBox = document.getElementById('inputBox');
        let buttons = document.querySelectorAll('button');

        let string = "";
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const buttonText = e.target.innerHTML;

                if (buttonText === '=') {
                    try {
                        string = eval(string);
                        inputBox.value = string;
                    } catch (error) {
                        inputBox.value = 'Error';
                        string = "";
                    }
                } else if (buttonText === 'AC') {
                    string = "";
                    inputBox.value = string;
                } else if (buttonText === 'DEL') {
                    string = string.substring(0, string.length - 1);
                    inputBox.value = string;
                } else {
                    string += buttonText;
                    inputBox.value = string;
                }
            });
        });