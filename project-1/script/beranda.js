const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get('name');
        
        document.getElementById('startButton').addEventListener('click', function() {
            this.style.display = 'none';
            document.getElementById('countdown').style.display = 'block';
            document.getElementById('bgMusic').play();
            startCountdown();
        });

        function startCountdown() {
            let timeLeft = 30;
            const countdownElement = document.getElementById('countdown');
            
            const countdown = setInterval(() => {
                timeLeft--;
                countdownElement.textContent = timeLeft;
                
                if (timeLeft <= 0) {
                    clearInterval(countdown);
                    document.querySelector('.home-container').style.display = 'none';
                    showSurprise();
                }
            }, 1000);
        }

        function showSurprise() {
            const surpriseContainer = document.getElementById('surprise-container');
            const loveMessages = document.getElementById('love-messages');
            const photoContainer = document.getElementById('photo-container');
            surpriseContainer.style.display = 'flex';

            const messages = [
                `${name}, kamu adalah segalanya bagiku 😝`,
                "Setiap detik bersamamu adalah hadiah terindah 😹",
                "Kamu membuat hidupku lebih berwarna 😱",
                "Aku akan selalu mencintaimu 😤",
                "Kamu adalah alasan aku tersenyum setiap hari 😡"
            ];

            let currentMessageIndex = 0;

            function typeWriter(message, element) {
                let i = 0;
                element.classList.add('typing');
                
                function type() {
                    if (i < message.length) {
                        element.textContent += message.charAt(i);
                        i++;
                        setTimeout(type, 200); // Adjust typing speed here
                    } else {
                        element.classList.remove('typing');
                        if (currentMessageIndex < messages.length - 1) {
                            currentMessageIndex++;
                            const newMessageDiv = document.createElement('div');
                            newMessageDiv.className = 'message';
                            loveMessages.appendChild(newMessageDiv);
                            setTimeout(() => typeWriter(messages[currentMessageIndex], newMessageDiv), 500);
                        } else {
                            // Show photos after last message
                            setTimeout(() => {
                                photoContainer.style.display = 'flex';
                                setInterval(createHeartRain, 100);
                            }, 1000);
                        }
                    }
                }
                
                type();
            }

            const firstMessageDiv = document.createElement('div');
            firstMessageDiv.className = 'message';
            loveMessages.appendChild(firstMessageDiv);
            typeWriter(messages[0], firstMessageDiv);
        }

        function createHeartRain() {
            const heart = document.createElement('div');
            heart.className = 'heart-rain';
            heart.innerHTML = '♥';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 2 + 3 + 's';
            heart.style.opacity = Math.random();
            heart.style.fontSize = Math.random() * 20 + 10 + 'px';
            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 5000);
        }