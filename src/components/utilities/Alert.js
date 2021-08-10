import swal from "@sweetalert/with-react";

const Alert = (message, icon, title) => {
	swal({ title: title, text: message, icon: icon });
};

export default Alert;
