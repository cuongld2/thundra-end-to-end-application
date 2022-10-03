const request = require("supertest")
const baseURL = "http://localhost:3000/v1"

describe("Update existing blog", () => {
    var blogId="61b5a4f4a33fbf4e335cb224"
    var userToken=""
    const beforeUpdateBlog = {
      title: "A new testing blog beforeUpdateBlog",
      content: "A GitHub Action to track and monitor the resource metrics of your GitHub Action workflow runs. If the run is triggered via a Pull Request, it will create a comment on the connected PR with the results and/or publishes the results to the job summary. The action collects the following metrics.",
      authorId: "631faeedce7d2f5fd7f42a75"
    }
    const afterUpdateBlog = {
        title: "A new testing blog afterUpdateBlog",
        content: "A GitHub Action to track and monitor the resource metrics of your GitHub Action workflow runs. If the run is triggered via a Pull Request, it will create a comment on the connected PR with the results and/or publishes the results to the job summary. The action collects the following metrics.",
        authorId: "631faeedce7d2f5fd7f42a75"
      }
    const authUser={
            email:"donald.le@iamondemand.com",
            password:"tatiana"
    }
    beforeAll(async () => {
      // Get user token
      const response = await request(baseURL).post("/auth").send(authUser);
      expect(response.statusCode).toBe(200);
      userToken=response.body.data.token
      const responsePut = await request(baseURL).put(`/posts/${blogId}`).set("Authorization","JWT " + userToken).send(beforeUpdateBlog);
      expect(responsePut.statusCode).toBe(200);
    })
    it("should return 200", async () => {
      const responseGetBefore = await request(baseURL).get(`/posts/${blogId}`).set("Authorization","JWT "+userToken);
      expect(responseGetBefore.statusCode).toBe(200);
      expect(responseGetBefore.body.data.title).toBe(beforeUpdateBlog.title);
      
      const response = await request(baseURL).put(`/posts/${blogId}`).set("Authorization","JWT "+userToken).send(afterUpdateBlog);
      expect(response.statusCode).toBe(200);
      expect(response.body.data.title).toBe(afterUpdateBlog.title);

      const responseGet = await request(baseURL).get(`/posts/${blogId}`).set("Authorization","JWT "+userToken);
      expect(responseGet.statusCode).toBe(200);
      expect(responseGet.body.data.title).toBe(afterUpdateBlog.title);
    });
  });