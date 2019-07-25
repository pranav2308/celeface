const particleOptions = {
    particles:{
      number : {
        value : 200,
        density : {
          enable : true,
          value_area : 1000,
        }
      },
      color : {
        value: "#c32f2f",
      },
      size : {
        value : 15,
      }
    }, 
    interactivity : {
      events : {
        onhover : {
          enable : false,
          mode : "repulse",
        },
        onclick : {
          enable : true,
          mode : "push",
        },
      },
      detect_on : "window",
    }
  };

  export default particleOptions;