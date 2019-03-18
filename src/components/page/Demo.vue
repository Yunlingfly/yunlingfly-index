<template>
  <div>

  </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    created(){
    }
}
</script>
<script>
    L2Dwidget.init({
        "model": {
            // https://unpkg.com/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json
            jsonPath: "https://unpkg.com/live2d-widget-model-haru@1.0.5/02/assets/haru02.model.json",
            "scale": 1
        },
        "display": {
            "position": "right",
            "width": 150,
            "height": 300,
            "hOffset": 0,
            "vOffset": -20
        },
        "mobile": {
            "show": true,
            "scale": 0.5
        },
        "react": {
            "opacityDefault": 0.7,
            "opacityOnHover": 0.2
        }
    });
</script>