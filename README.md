# Getting Started using Docker

Make sure you have installed docker and docker-destop on your machine. To verify it is installed or not, please run

### `docker --version`

Next step is to create a container from the docker image to run your application. Run the following command

### `docker run -dp 3000:3000 --name news-aggregator news-aggregator:latest`

`-d` runs the container in detached mode – that is, it will run in the background and not display the running process on your terminal.

`-p` maps the port in the form `<host_port>:<container_port>`. The host port represents the port on the host machine that is mapped to the port inside the container. Since a React app is exposed through port 3000, we will map it to the port 3000 on your host machine.

The `--name` flag specifies the name for the container.

After these, you specify the image name and tag.

If the image does not exist on your local system, it will try to find the image in the Docker registry.

To check this, delete your local image using `docker rm news-aggregator` and run the above command. Since there is an image with the same name on Docker Hub, it will download the image and create a container out of it.

Now, run `docker ps` or `docker container ps` to show a list of all the running containers.

Now, open your browser and go to `http://localhost:3000`. You'll be able to access your application.

To stop a running container, use the `docker stop` command with the container id or name.

### `docker stop <container_id>`

Now, if you run `docker ps`, it won't show the container as it only shows the running ones. If you want to see all the containers, including the non-running ones, use `docker ps -a`.

Also, navigate to the same URL `http://localhost:3000` and you won't be able to see anything since the container is not running. To restart the container, run `docker start <container_id>`.

To remove the container, use the `docker rm` command followed by the container id or name.

### `docker rm <container_id>`