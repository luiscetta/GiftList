export default function AddForm() {
    window.onload = () => {
        let btn_add = document.getElementById('add1');
        let box = document.getElementById('box');

        let count = 1;

        btn_add.addEventListener('click', () => {
            count++;
            createLabel();
            createInput();
        });

        function createLabel() {
            let element = document.createElement('label');
            element.setAttribute('for', 'name_' + count);
            element.textContent = 'Digite o nome da outra pessoa';

            box.appendChild(element);
        }

        function createInput() {
            let element = document.createElement('input');
            element.setAttribute('type', 'text');
            element.setAttribute('id', 'name_' + count);
            element.setAttribute('name', 'name_' + count);
            element.setAttribute('required', 'true');
            element.setAttribute('autoComplete', 'off');

            box.appendChild(element);
        }

    }

}