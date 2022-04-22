# media-handler

## Installation

```bash
git clone https://github.com/Er4ik/media-handler.git
```

## Usage

- You must have docker on your pc. 

- Step 1:
```bash
docker build -f Dockerfile -t app:01 .
```

- Step 2:
```bash
docker run --rm -it -p 3000:3000 app:01
```

- Step3:

Send a request with this body (it should be a URL to an image):
```json
{
    "url": "some_url_to_image.png"
}
```