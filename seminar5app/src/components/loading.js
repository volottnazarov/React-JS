import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function Loading({ isLoading }) { // компонент, кот будет обернут в isLoading(true/false)
    return (
        <>
            {isLoading ?
                <h2>
                    Loading <FontAwesomeIcon icon={faSpinner} />
                </h2> : <h2>Loading End!</h2>
            }
        </>
    );
}

export default Loading;