// Function to load state data and split it in half
async function loadStatesData() {
    try {
        const response = await fetch('./states.json');
        const data = await response.json();
        
        console.log('Loaded data:', data);

        // Extract the states array
        const allStates = data.states;

        if (!Array.isArray(allStates)) {
            throw new Error('Loaded data does not contain an array of states');
        }

        // Split the array in half
        const halfLength = Math.ceil(allStates.length / 2);
        const firstHalf = allStates.slice(0, halfLength);
        const secondHalf = allStates.slice(halfLength);

        // Save first half of states to local storage
        firstHalf.forEach(function(state) {
            const stateName = state.name;
            const stateData = { ...state };
            delete stateData.name;
            localStorage.setItem(stateName, JSON.stringify(stateData));
        });

        console.log('First half of states:', firstHalf);
        console.log('Second half of states:', secondHalf);

        return { firstHalf, secondHalf };
    } catch (error) {
        console.error('Error loading states data:', error);
        return null;
    }
}

loadStatesData();