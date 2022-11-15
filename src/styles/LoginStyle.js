import styled from 'styled-components';

const LoginStyle = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("https://c.pxhere.com/photos/f2/29/kitchen_work_restaurant_cook_chef_professional_food_preparation-1327589.jpg!d") ;
  background-repeat: round;
  background-position: center;
  opacity: 0.85;

  form {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 300px){
    form {
      width: 70%;
    }
  }

  @media (max-width: 1300px){
    form {
      width: 30%;
    }
  }

  @media (min-width: 1300px){
    form {
      width: 20%;
    }
  }

  form button {
    margin-top: 5px;
    overflow: hidden; 
  }

  form button:enabled {
    background: transparent;
    color: white;
    font-weight: bold;
  }

`;

export default LoginStyle;
