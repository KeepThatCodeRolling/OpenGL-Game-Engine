#version 330 core 
out vec4 FragColor;

in vec3 FragPos;
in vec3 Color;

uniform vec3 viewPos;

void main()
{
	FragColor = vec4(Color,1.0f);
}