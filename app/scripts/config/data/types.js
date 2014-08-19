//this can be a part of the js app or can be passed from api in a initial request
var DataTypes = {
  bpi: {
      impresions: {
        label: "Impresions",
        dimensions: {
          sourcetype: {
            label: "Source type",
            defaultchart: "line"
          },
          channel: { 
            label: "Channel",
            defaultchart: "pie"
          },
          campaign: {
            label: "Campaign",
            defaultchart: "bar"
          }
        }
      },

      visits: { 
        label: "Visits",
        dimensions: {
          device: {
            label: "Device",
            defaultchart: "pie"
          },  
          medium: { 
            label: "Medium",
            defaultchart: "bar"
          }, 
          socialnetwork: { 
            label: "Social network",
            defaultchart: "pie"
          }, 
          source: { 
            label: "Source",
            defaultchart: "line"
          }, 
          campaign: { 
            label: "Campaign",
            defaultchart: "bar"
          }, 
        }
      },

      clicks: { 
        label: "Clicks",
        dimensions: {
          device: {
            label: "Device",
            defaultchart: "pie"
          },  
          medium: { 
            label: "Medium",
            defaultchart: "bar"
          }, 
          source: { 
            label: "Source",
            defaultchart: "line"
          }, 
          campaign: { 
            label: "Campaign",
            defaultchart: "bar"
          }
        }
      },

      ctr: {
        label: "CTR",
        dimensions: {
          channel: { 
            label: "Channel",
            defaultchart: "pie"
          },
          campaign: {
            label: "Campaign",
            defaultchart: "bar"
          }
        } 
     }
  }, //end bpi
  timeline: {
    daily: "daily",
    weekly: "weekly",
    monthly: "monthly",
    none: "none"
  }//end timeline

}