
const initialState = {
    posts: [
        {id: 1, title: 'Post Title 1', description: 'Sample Test 1'},
        {id: 2, title: 'Post Title 2', description: 'Sample Test 2'},
    ]
}

export function postsReducer(state = initialState, action){
    return state
}