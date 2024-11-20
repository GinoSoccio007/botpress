FROM botpress/server:latest

ENV PORT=3000
ENV EXTERNAL_URL=http://zwokw4ssg4gk0g0884wkgw84.104.37.187.180.sslip.io
ENV BP_PRODUCTION=true
ENV BP_CUSTOM_CSS=".bpw-powered{display:none!important;} .bpw-powered a{display:none!important;}"

EXPOSE 3000

# Create custom CSS file
RUN echo ".bpw-powered{display:none!important;} .bpw-powered a{display:none!important;}" > /botpress/data/global/custom.css

CMD ["./bp"]
