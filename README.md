# OpenGL Example Program

OpenGL Example Program is a simple program for basic modern, core OpenGL 3.3 with CMake 3.1.

This program contains commonly used libraries GLFW, GLAD, GLM, and STB.

Requires git and CMake 3.1 or later to build.

<img src="opengl-template.gif" width="400" height="400">

## Testing Environment
* OS: Arch Linux
* Kernel: x86_64 5.13.13-zen1-1-zen

## Dependencies
* CMake 3.1 or greater
* OpenGL 3.3 or higher supported graphics card and drivers
* C++ compiler

## Compiling and Running

```shell
git clone https://github.com/jagger-harris/opengl-example-program.git
cd opengl-example-program
git submodule init
git submodule update
mkdir build
cd build
cmake ..
make
./opengl
```

## Contributing
This is a personal project. Contributions will not be accepted.

## License
[MIT](https://choosealicense.com/licenses/mit/)
