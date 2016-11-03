# Tour of Reduced Heroes

Redux formation for Atrápalo on 4th November 2016.

## Setting up
Clone this repository:
```
git clone https://github.com/MarcAtrapalo/redux-formation.git
```

Then, install project:
```
npm install
npm start
```

Open a browser tab at:
```
http://localhost:3000
```

## Developing
#### 1. State
The first step should be to think about the structure of the state, and implement the initial state.

#### 2. Actions
Think about what actions must the system react to, and implement their action creators.

#### 3. Reducers
Implement the reducers to modify the state according to those actions.

Implement also the reducers' tests. Execute them with:
```
npm test
```

#### 4. Store
Bootstrap the store at the index.js root.

#### 5. Connect
Connect the existing components to the store with react-redux.

#### 6. Extra points: API
Synchronize every change in the heroes with the API mock provided in `src/api/`. Use redux-thunk to implement async action creators.

Also, show a Loading when adding new heroes and an error message when the API rejects. The API will reject all new heroes with even IDs (divisible by 2). 