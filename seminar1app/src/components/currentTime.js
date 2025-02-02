import './currentTime.css';

function CurrentTime() {
    const now = new Date();
    const hoursAndMinutes = now.toLocaleTimeString('ru', {
        hour: '2-digit',
        minute: '2-digit',
      });
    return ( <div>
                <h2>
                    Текущее время: {hoursAndMinutes}
                </h2>
            </div>
    );
}

export default CurrentTime;