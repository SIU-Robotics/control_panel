let enabled = false;

$("#camera_btn").click(open_camera);

function open_camera() {
    if (enabled) {
        location.reload()
    }
    else {
        enabled = true;
        index = document.getElementById("cameraID").value;
        document.getElementById("video").innerHTML = "<img height='200' width='250' id='camera_img' src='/controller/camera/" + index + "/'>";

    }

}