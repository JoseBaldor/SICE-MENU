import { fastFoodOutline, filmOutline, gameControllerOutline } from "ionicons/icons";

export const topics = [
	{
		header: "Servicios Escolares",
		color: "primary",
		icon: filmOutline,
		options: [
			{
				label: "Plan de Estudios",
				url: "/page/catalogos",
			},
			{
				label: "Materia Plan de Estudios",
				url: "/page/catalogos",
			},
		]
	},
	{
		header: "Recursos Humanos",
		color: "success",
		icon: fastFoodOutline,
		options: [
			{
				label: "Empleados",
				url: "/page/catalogos",
			},
		]
	},
	{
		header: "Catálogos",
		color: "warning",
		icon: gameControllerOutline,
		options: [
			{
				label: "Materias",
				url: "/page/catalogos",
			},
			{
				label: "Carreras",
				url: "/page/catalogos",
			},
			{
				label: "Unidadades Académicas",
				url: "/page/catalogos",
			},
		]
	},
	
];