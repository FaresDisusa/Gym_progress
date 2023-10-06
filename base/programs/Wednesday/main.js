const groupChoice = document.getElementById('groupChoice');
const muscleChoice = document.getElementById('muscleChoice');

groupChoice.addEventListener('change', () => {
    const selectedGroups = parseInt(groupChoice.value);

    // Effacer les options précédentes du deuxième menu déroulant
    muscleChoice.innerHTML = '';

    if (selectedGroups === 0) {
        // Ajouter l'option "Repos" si zéro groupe musculaire
        const restOption = document.createElement('option');
        restOption.value = 'repos';
        restOption.textContent = "Rest";
        muscleChoice.appendChild(restOption);
    } else if (selectedGroups === 1) {
        // Ajouter les options spécifiques pour un groupe musculaire
        const muscleOptions = [
            "Back", "Arms", "Legs", "Shoulders",
            "ABS", "Gloutes", "Chest", "Biceps",
            "Triceps", "Cardio"
        ];

        muscleOptions.forEach(optionText => {
            const option = document.createElement('option');
            option.value = optionText.toLowerCase();
            option.textContent = optionText;
            muscleChoice.appendChild(option);
        });
    } 
    else if (selectedGroups === 2) {
        // Ajouter les options spécifiques pour un groupe musculaire
        const muscleOptions = [
            "Back + Biceps", "Chest + Trisceps", "Back + Shoulders", "Legs + ABS",
            "Legs + Gloutes", "Trisceps + Shoulders", "Arms + Back", "Arms + Shoulders",
            "Arms + Chest", "Chest + ABS", "Back + ABS", "Shoulders + ABS", "Arms + ABS",
            "Legs + Back", "Chest + Shoulders", "Back + Triceps","Chest + Biceps"
        ];

        muscleOptions.forEach(optionText => {
            const option = document.createElement('option');
            option.value = optionText.toLowerCase();
            option.textContent = optionText;
            muscleChoice.appendChild(option);
        });
    } 
    else if (selectedGroups === 3) {
        // Ajouter les options spécifiques pour un groupe musculaire
        const muscleOptions = [
            "Chest + Shoulders + Trisceps", "Chest + Shoulders + Arms", "Chest + Shoulders + Biceps"
            , "Back + Shoulders + Trisceps", "Back + Shoulders + Arms", "Back + Shoulders +Biceps",
            "Back + Chest + Trisceps", "Back + Chest + Biceps", "Back + Chest + Arms","Legs + ABS + Gloutes",
            "Legs + ABS + Back", "Legs + Gloutes + Back"
        ];

        muscleOptions.forEach(optionText => {
            const option = document.createElement('option');
            option.value = optionText.toLowerCase();
            option.textContent = optionText;
            muscleChoice.appendChild(option);
        });
    } 
    else {
        // Ajouter les options pour les groupes musculaires
        for (let i = 1; i <= selectedGroups; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `Muscle ${i}`;
            muscleChoice.appendChild(option);
        }
    }
});