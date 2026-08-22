const checkboxContainers = document.querySelectorAll('.checkbox-container');
const isLSAvailable = isLocalStorageAvailable();
let checkedCheckboxes = new Set();
let progression = 0;
const progressionValueEl = document.getElementById('progression-value')
const progressionEl = document.getElementById('progression')

if (isLSAvailable) {
    const checkedInLS = localStorage.getItem('checked') ? JSON.parse(localStorage.getItem('checked')) : [];
    if (checkedInLS && checkedInLS.length > 0) {
        checkedCheckboxes = new Set(checkedInLS);
        for (const container of checkboxContainers) {
            const checkboxEl = container.querySelector('.checkbox > input')
            if (checkedCheckboxes.has(checkboxEl.getAttribute('aria-labelledby'))) {
                checkboxEl.setAttribute('checked', "true");
            }
        }
        updateProgression();
    }
}

for (const container of checkboxContainers) {
    const checkboxTitle = document.getElementById(container.querySelector('.checkbox > input').getAttribute('aria-labelledby'));
    container.querySelector('.checkbox').style.minHeight = `${checkboxTitle.getBoundingClientRect().height}px`;
}

const copyButton = document.getElementById('copy-code')

copyButton.addEventListener('click', (e) => {
    navigator.clipboard.writeText(`(function () {
    const elements = document.querySelectorAll('*');
    for (const el of elements) {
        el.style.lineHeight = "1.5";
        el.style.letterSpacing = "0.12em";
        el.style.wordSpacing = "0.16em";
    }

    const paragraphs = document.querySelectorAll('p');
    for (const p of paragraphs) {
        p.style.marginBottom = "2em";
    }
})();`);

    const textContent = copyButton.querySelector('.label').textContent;
    const copiedTimes = textContent === 'Copy' ? 0 : textContent === 'Copied' ? 1 : Number(textContent.split(' ')[1].slice(1));
    copyButton.querySelector('.label').textContent = `Copied${!copiedTimes ? '' : ` x${copiedTimes + 1}`}`
})

for (const container of checkboxContainers) {
    container.addEventListener('click', clickCheckbox);
}

function clickCheckbox(e) {
    const target = e.target;
    const isNowChecked = e.target.checked;
    if (isNowChecked) {
        checkedCheckboxes.add(target.getAttribute('aria-labelledby'))
    } else {
        checkedCheckboxes.delete(target.getAttribute('aria-labelledby'))
    }
    if (isLSAvailable) {
        localStorage.setItem('checked', JSON.stringify(Array.from(checkedCheckboxes)))
    }
    updateProgression();
}

function updateProgression() {
    progression = (100 * checkedCheckboxes.size / checkboxContainers.length).toFixed(0);
    progressionValueEl.textContent = `${progression}%`;
    progressionEl.setAttribute('value', progression);
    if (progression === '100') {
        progressionEl.classList.add('complete');
    } else {
        progressionEl.classList.remove('complete');
    }
}

function isLocalStorageAvailable() {
    try {
        const testKey = "__storage_test__";
        localStorage.setItem(testKey, testKey);
        localStorage.removeItem(testKey);
        return true;
    } catch (e) {
        return false;
    }
}