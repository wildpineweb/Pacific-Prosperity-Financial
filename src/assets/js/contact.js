const buyingSellingSelect = document.getElementById('buying-selling-265');
const buyingExperienceLabel = document.getElementById('buying-experience-label');
const buyingExperienceTextarea = document.getElementById('buying-experience-265');

buyingSellingSelect.addEventListener('change', function () {
    if (this.value === 'buying') {
        buyingExperienceLabel.style.display = '';
    } else {
        buyingExperienceLabel.style.display = 'none';
        buyingExperienceTextarea.value = '';
    }
});
