export default function SubmitForm() {
    let confirm_btn = document.getElementById("confirm1");
    let form1 = document.getElementById("form1");

    confirm_btn.addEventListener('click', () => {
        form1.submit();
    });
}