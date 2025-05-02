 // In a real app, you would get these values from your backend/API
        // This is just demo code to show how to populate the fields
        document.addEventListener('DOMContentLoaded', function() {
            // Get URL parameters (simulated here)
            const params = new URLSearchParams(window.location.search);
            
            // Set user data
            document.getElementById('user-name').textContent = params.get('name') || 'Commander Alex';
            document.getElementById('user-age').textContent = (params.get('age') || '28') + ' cycles';
            document.getElementById('user-student').textContent = 
                (params.get('student') === 'yes' ? 'Active' : 'Inactive');
            
            // Set sleep data
            document.getElementById('sleep-duration').textContent = 
                (params.get('sleepTime') || '7.5') + ' Earth hours';
            document.getElementById('bedtime').textContent = formatTime(params.get('bedtime') || '22:30');
            document.getElementById('waketime').textContent = formatTime(params.get('wakeTime') || '06:00');
            document.getElementById('screen-time').textContent = 
                (params.get('screenTime') || '2.1') + 'h';
            
            // Calculate derived stats (in a real app, these would come from your model)
            const sleepTime = parseFloat(params.get('sleepTime') || '7.5');
            const screenTime = parseFloat(params.get('screenTime') || '2.1');
            
            // Set prediction based on inputs
            if (sleepTime >= 7 && screenTime <= 2) {
                document.getElementById('prediction-quality').textContent = 'OPTIMAL STASIS';
                document.getElementById('prediction-desc').textContent = 
                    'Your sleep patterns show excellent synchronization with circadian rhythms. Recovery efficiency at 92% - maintain current protocols.';
                document.getElementById('sleep-efficiency').textContent = '94%';
                document.getElementById('rem-cycles').textContent = '5';
            } else if (sleepTime >= 6 && screenTime <= 3) {
                document.getElementById('prediction-quality').textContent = 'STABLE PATTERN';
                document.getElementById('prediction-desc').textContent = 
                    'Minor deviations detected in sleep architecture. Suggest reducing blue light exposure by 30% pre-stasis.';
                document.getElementById('sleep-efficiency').textContent = '82%';
                document.getElementById('rem-cycles').textContent = '4';
            } else {
                document.getElementById('prediction-quality').textContent = 'CRITICAL DISRUPTION';
                document.getElementById('prediction-desc').textContent = 
                    'Warning! Significant sleep deprivation detected. Immediate protocol adjustment required to avoid cognitive degradation.';
                document.getElementById('sleep-efficiency').textContent = '68%';
                document.getElementById('rem-cycles').textContent = '3';
            }
        });
        
        function formatTime(timeStr) {
            if (!timeStr) return '00:00 ST';
            return timeStr + ' ST'; // ST = Stasis Time
        }