function predictSleepQuality() {
    // Mock analysis (replace with actual API call)
    const sleepTime = parseFloat(document.getElementById('sleepTime').value);
    const screenTime = parseFloat(document.getElementById('screenTime').value);
    
    let quality, feedback;
    if (sleepTime >= 7 && screenTime <= 2) {
        quality = "OPTIMAL STASIS";
        feedback = "Your sleep cycles are synchronized with cosmic rhythms. Excellent recovery detected.";
    } else if (sleepTime >= 6 && screenTime <= 3) {
        quality = "STABLE PATTERN";
        feedback = "Minor deviations detected. Suggest reducing blue light exposure pre-stasis.";
    } else {
        quality = "CRITICAL DISRUPTION";
        feedback = "Warning! Sleep deprivation detected. Immediate protocol adjustment recommended.";
    }

    // Display result with sci-fi flair
    document.getElementById('result').style.display = 'block';
    document.getElementById('predictionResult').textContent = quality;
    document.getElementById('sleepFeedback').textContent = feedback;
}