FROM botpress/server:latest

ENV PORT=3000
ENV EXTERNAL_URL=http://zwokw4ssg4gk0g0884wkgw84.104.37.187.180.sslip.io
ENV BP_PRODUCTION=true

EXPOSE 3000

CMD ["./bp"]
