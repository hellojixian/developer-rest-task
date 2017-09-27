import { CHANGE_FORM,SET_AUTH,SENDING_REQUEST,SET_ERROR_MESSAGE } from './../actions/const';

// The initial application state
const initialState = {
    products:[
        {
            id: 1,
            title: 'My Company Another Product',
            prod_type: 'Stylet1',
            prod_sub_type: 'Tracheal Tube',
            date: 'Since ' + new Date(),
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo sem massa, eget molestie neque tempus non. Integer eu est ut dolor lacinia eleifend molestie sit amet urna. Cras a sodales nibh. Nunc quis scelerisque urna. Mauris feugiat, metus eu molestie faucibus, orci leo consectetur nisl, ac porta mi elit varius lectus. Vivamus vel cursus arcu. Nullam consectetur dignissim justo laoreet egestas. Proin tristique, lacus porta rhoncus feugiat, diam augue',
            logo_url: '../../images/logo_icon.png',
            company_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTOcq_edkfyIVqhjmegjiMvmTnvUo0ei7JKXkD-CvNaTZR5D3P'
        },
        {
          id: 2,
          title: 'My Company Another Product',
          prod_type: 'Stylet2',
          prod_sub_type: 'Tracheal Tube',
          date: 'Since' + new Date(),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo sem massa, eget molestie neque tempus non. Integer eu est ut dolor lacinia eleifend molestie sit amet urna. Cras a sodales nibh. Nunc quis scelerisque urna. Mauris feugiat, metus eu molestie faucibus, orci leo consectetur nisl, ac porta mi elit varius lectus. Vivamus vel cursus arcu. Nullam consectetur dignissim justo laoreet egestas. Proin tristique, lacus porta rhoncus feugiat, diam augue',
          logo_url: '../../images/logo_icon.png',
          company_url: 'https://i.pinimg.com/originals/bb/3b/99/bb3b99b50ce9481ade937cca7919cdad.jpg'
        },
        {
          id: 3,
          title: 'My Company Another Product',
          prod_type: 'Stylet3',
          prod_sub_type: 'Tracheal Tube',
          date: 'Since' + new Date(),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo sem massa, eget molestie neque tempus non. Integer eu est ut dolor lacinia eleifend molestie sit amet urna. Cras a sodales nibh. Nunc quis scelerisque urna. Mauris feugiat, metus eu molestie faucibus, orci leo consectetur nisl, ac porta mi elit varius lectus. Vivamus vel cursus arcu. Nullam consectetur dignissim justo laoreet egestas. Proin tristique, lacus porta rhoncus feugiat, diam augue',
          logo_url: '../../images/logo_icon.png',
          company_url: 'https://i.pinimg.com/originals/bb/3b/99/bb3b99b50ce9481ade937cca7919cdad.jpg'
        },
        {
          id: 4,
          title: 'My Company Another Product',
          prod_type: 'Stylet4',
          prod_sub_type: 'Tracheal Tube',
          date: 'Since' + new Date(),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo sem massa, eget molestie neque tempus non. Integer eu est ut dolor lacinia eleifend molestie sit amet urna. Cras a sodales nibh. Nunc quis scelerisque urna. Mauris feugiat, metus eu molestie faucibus, orci leo consectetur nisl, ac porta mi elit varius lectus. Vivamus vel cursus arcu. Nullam consectetur dignissim justo laoreet egestas. Proin tristique, lacus porta rhoncus feugiat, diam augue',
          logo_url: '../../images/logo_icon.png',
          company_url: 'https://i.pinimg.com/originals/bb/3b/99/bb3b99b50ce9481ade937cca7919cdad.jpg'
        }
    ]
};


// Takes care of changing the application state
export default function auth(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
