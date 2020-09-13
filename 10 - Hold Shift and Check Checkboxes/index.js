let checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let firstChecked;

function handleclick(e) {

    let inBetween = false;

    if (this.checked && e.shiftKey) {
        let lastChecked = this;

        checkboxes.forEach(checkbox => {

            if (checkbox === firstChecked || checkbox === lastChecked) {
                inBetween = !inBetween
            }

            if (inBetween) {
                checkbox.checked = true
            }
        })
    }

    firstChecked = this;

}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleclick));