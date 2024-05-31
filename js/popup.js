document.addEventListener('DOMContentLoaded', function () {
    const saveBtn = document.getElementById('save-btn');
    const note = document.getElementById('note');

    // Load saved note
    chrome.storage.sync.get(['quickNote'], function(result) {
        if (result.quickNote) {
            note.value = result.quickNote;
        }
    });

    // Save note
    saveBtn.addEventListener('click', function() {
        const noteText = note.value;
        chrome.storage.sync.set({ quickNote: noteText }, function() {
            alert('Note saved!');
        });
    });
});