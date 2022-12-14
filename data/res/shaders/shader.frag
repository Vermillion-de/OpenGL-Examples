#version 330 core

in vec3 ourColor;
in vec2 ourTexCoords;

out vec4 FragColor;

uniform sampler2D texture1;
uniform sampler2D texture2;

uniform float opacity;

void main() {
    FragColor = mix(texture(texture1, ourTexCoords), texture(texture2, ourTexCoords), 0.2) * vec4(ourColor, 1.0f);
}
